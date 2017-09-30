from db.mongodb import *
import datetime


class User(Document):
    email = StringField(required=True, primary_key=True)
    # 메인 서버에 있는 password 제외
    nickname = StringField(required=True)
    entry_date = StringField(required=True, default=str(datetime.date.today()))
    # 메인 서버에 있는 signupType 제외

    watched = ListField(DictField())
    liked = ListField(DictField())
    commented = ListField(DictField())
    posted = ListField(DictField())
    # 날짜: 게시글 ID 순
