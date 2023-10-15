from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_name: str = "gpt-3.5-turbo"

    model_config = SettingsConfigDict(env_file=".env")
