class AddNullsToBanners < ActiveRecord::Migration[6.0]
  def change
    change_column_null(:banners, :title, false)
    change_column_null(:banners, :text, false)
    change_column_null(:banners, :file, false)
  end
end
