from typing import Optional

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    open_ai_key: Optional[str] = None
    model_name: str = "gpt-3.5-turbo"

    model_config = SettingsConfigDict(env_file=".env")
