json.user_name    @message.user.name
json.text         @message.content
json.image        @message.image.url
json.date         @message.created_at.strftime("%Y/%m/%d %H:%M")