from datetime import datetime

from pydantic import BaseModel  # pylint: disable=no-name-in-module


class ORMModel(BaseModel):
    class Config:
        orm_mode = True


class Author(ORMModel):
    name: str
    created_at: datetime

    class Config:
        orm_mode = True


class Article(ORMModel):
    id: int
    url_id: int

    title: str
    snippet: str
    thumbnail_url: str
    created_at: datetime

    class Config:
        orm_mode = True


class URLs(ORMModel):
    id: int
    article_id: int

    address: str
    created_at: datetime

    class Config:
        orm_mode = True
