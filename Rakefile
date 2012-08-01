task :update_readmill do
  files = %w{https://platform.readmill.com/send.js https://platform.readmill.com/assets/platform/btn_ph_str_large.png https://platform.readmill.com/assets/platform/btn_ph_str_small.png}
  files.each do |file|
    `curl -s #{file} > readmill/#{File.basename(file)}`
    puts "Fetching #{File.basename(file)}"
  end
end
