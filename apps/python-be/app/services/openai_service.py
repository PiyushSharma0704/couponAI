# from openai import RateLimitError


# async def extract_coupon(image_url: str):
#     try:

#         response = client.chat.completions.create(
#             model="gpt-4o",
#             response_format={
#                 "type": "json_object"
#             },
#             messages=[
#                 {
#                     "role": "user",
#                     "content": [
#                         {
#                             "type": "text",
#                             "text": PROMPT
#                         },
#                         {
#                             "type": "image_url",
#                             "image_url": {
#                                 "url": image_url
#                             }
#                         }
#                     ]
#                 }
#             ]
#         )

#         content = response.choices[0].message.content

#         return json.loads(content)

#     except RateLimitError:
#         return {
#             "error": "OpenAI quota exceeded"
#         }

#     except Exception as error:
#         return {
#             "error": str(error)
#         }

import os
import json
import requests

from io import BytesIO

from PIL import Image

from dotenv import load_dotenv

from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

PROMPT = """
Extract coupon information from this image.

Return ONLY valid JSON.

Fields:
- company_name
- coupon_code
- expiry_date
- discount
- terms

If unavailable return null.
"""


async def extract_coupon(image_url: str):

    """
    Download image
    """

    response = requests.get(image_url)

    image = Image.open(
        BytesIO(response.content)
    )

    """
    Send to Gemini
    """

    result = client.models.generate_content(
        model="gemini-2.5-flash",

        contents=[
            PROMPT,
            image
        ]
    )

    text = result.text

    """
    Clean markdown JSON blocks
    """

    cleaned_text = (
        text
        .replace("```json", "")
        .replace("```", "")
        .strip()
    )

    return json.loads(cleaned_text)