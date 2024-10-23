from fastapi import APIRouter

router = APIRouter()


@router.post("/api/v1/auth/login")
async def login():
    return {"message": "Login endpoint is under construction"}


@router.post("/api/v1/auth/sign")
async def sign():
    return {"message": "sign in endpoint  is under construction"}
