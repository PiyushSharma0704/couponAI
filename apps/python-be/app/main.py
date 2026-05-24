from fastapi import FastAPI

from pydantic import BaseModel

from app.services.openai_service import (
    extract_coupon
)

app = FastAPI()


class ExtractRequest(BaseModel):
    image_url: str


@app.get("/")
def health():
    return {
        "success": True,
        "message": "Python AI Service Running 🚀"
    }


@app.post("/extract-coupon")
async def extract_coupon_api(
    payload: ExtractRequest
):
    result = await extract_coupon(
        payload.image_url
    )

    return {
        "success": True,
        "data": result
    }