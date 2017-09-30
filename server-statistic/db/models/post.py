from db.mongodb import *
from db.models.user import User
import datetime


class Post(Document):
    category = StringField(required=True)
    title = StringField(required=True)
    post_date = StringField(required=True, default=str(datetime.date.today()))
    writer = ReferenceField(User)
    # 메인 서버에 있는 content 제외

    watched = ListField()
    liked = ListField()
    commented = ListField()
    # 조회, 좋아요, 댓글이 달린 날짜 list
