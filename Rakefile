require 'json'

task :update_readmill do
  files = %w{https://platform.readmill.com/send.js https://platform.readmill.com/assets/platform/btn_ph_str_large.png https://platform.readmill.com/assets/platform/btn_ph_str_small.png}
  files.each do |file|
    `curl -s #{file} > readmill/#{File.basename(file)}`
    puts "Fetching #{File.basename(file)}"
  end
end

task :build do
  manifest = File.open("manifest.json", "r")
  json = JSON.load(manifest)
  version = json["version"]
  `zip releases/readmill-injector-#{version}.zip -x 'releases/*' -r *`
  puts "Built readmill-injector-#{version}.zip..."
end

task :release do
  manifest = File.open("manifest.json", "r")
  json = JSON.load(manifest)
  version = json["version"]
  `zip releases/readmill-injector-#{version}.zip -x 'releases/*' -r *`
  puts "Built readmill-injector-#{version}.zip..."
  `git tag #{version}`
  puts "Tagging branch with version..."
end
