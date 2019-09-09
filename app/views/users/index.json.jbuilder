json.array! @users do |user|    #JSON形式のデータを配列で返したい場合.array!を使う
  json.id     user.id
  json.name   user.name
end