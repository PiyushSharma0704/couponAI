from pydantic import BaseModel
from typing import Optional


class CouponResponse(BaseModel):
    company_name: Optional[str] = None
    coupon_code: Optional[str] = None
    expiry_date: Optional[str] = None
    discount: Optional[str] = None
    terms: Optional[str] = None