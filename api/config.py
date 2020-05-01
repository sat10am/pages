from functools import lru_cache

from pydantic import BaseSettings

from api.constants import DATABASE_URL


class Settings(BaseSettings):
    database_url: str = DATABASE_URL


@lru_cache()
def get_settings():
    return Settings()


settings = Settings()
