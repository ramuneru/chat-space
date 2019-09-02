class GroupsController < ApplicationController
  
  def new
    @group = Group.new
    @group.users << current_user  #現在ログイン中のユーザーを、新規作成したグループに追加
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to root_path, notice: 'グループを作成しました'
    else
      render :new
    end
  end

  private
  def group_params
    params.require(:group).permit(:name, { :user_ids => [] })
  end
end