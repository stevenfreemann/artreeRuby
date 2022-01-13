
ref_number = rand(1..10000)
puts "enter price"
price = gets.chomp.to_s + "00"
secret = "test_integrity_wi0bQa6UvC3a7trCM2uj7fgo1yBy5754"
chain = ref_number.to_s + price + "COP" + secret

#result = Digest::SHA2.hexdigest(chain)
puts chain
puts ref_number
