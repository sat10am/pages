from datetime import datetime

from sqlalchemy import Column, String, Integer, DateTime, ForeignKey
from sqlalchemy.orm import relationship

from api.sql.database import Base


class Author(Base):
    __tablename__ = "authors"

    name = Column(String, primary_key=True)
    created_at = Column(DateTime, default=datetime.now)


class URLs(Base):
    __tablename__ = "urls"

    id = Column(Integer, primary_key=True, index=True)
    address = Column(String, nullable=False)
    article = relationship("Article", uselist=False, back_populates="url")
    created_at = Column(DateTime, default=datetime.now)


class Article(Base):
    __tablename__ = "articles"
    placeholder = "https://placehold.it/200x200"

    url = relationship("URLs", back_populates="article")
    url_id = Column(Integer, ForeignKey("urls.id"))

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    snippet = Column(String, nullable=True)
    thumbnail_url = Column(String, nullable=False, default=placeholder)
    created_at = Column(DateTime, default=datetime.now)
