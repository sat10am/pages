from sqlalchemy.orm import Session

from api.sql.models import Article


def get_article(db: Session):
    return db.query(Article).first()
