from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    open_ai_key: str

    model_config = SettingsConfigDict(env_file=".env")
