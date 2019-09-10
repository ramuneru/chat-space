#最初の記述(再度参照用に残しておきたいためコメントアウトしています)
# json.user_name    @message.user.name
# json.text         @message.content
# json.image        @message.image.url
# json.date         @message.created_at.strftime("%Y/%m/%d %H:%M")

json.(@message, :content, :image)
json.created_at @message.created_at
json.user_name @message.user.name
json.id @message.id