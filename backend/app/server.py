from typing import Annotated

from fastapi import Depends, FastAPI

from app.config import Settings
from app.deps import get_settings

app = FastAPI()


@app.get("/")
def read_root(settings: Annotated[Settings, Depends(get_settings)]):
    return {"message": settings.open_ai_key}
