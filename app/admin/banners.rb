ActiveAdmin.register Banner do
  permit_params :title, :text, :page, :file

  form :html => { :enctype => "multipart/form-data" } do |f|
    f.inputs "Details" do
      f.input :title
      f.input :page, as: :select, collection: ["Home", "Line Pro", "Line Exclusive", "None"]
      f.input :text
			f.input :file
    end
    f.actions
  end
end
