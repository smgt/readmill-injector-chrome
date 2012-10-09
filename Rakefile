require 'json'

task :update_readmill do
  files = %w{https://platform.readmill.com/send.js https://platform.readmill.com/assets/platform/btn_ph_str_large.png https://platform.readmill.com/assets/platform/btn_ph_str_small.png}
  files.each do |file|
    `curl -s #{file} > readmill/#{File.basename(file)}`
    puts "Fetching #{File.basename(file)}"
  end
end

task :build do
  manifest = JSON.parse(IO.read("manifest.json"))
  version = manifest["version"]
  sha = `git log --quiet --pretty=format:%h -n1 HEAD`
  files = Array.new
  %w{data/**/*}.each do |glob|
    files = files + Dir.glob(glob)
  end
  files.push("manifest.json")
  zip_name = "readmill-injector-chrome-v#{manifest["version"]}-#{sha}.zip"
  `zip #{zip_name} #{files.join(" ")}`
  puts "Built #{zip_name}..."
end

task :release do
  manifest = JSON.parse(IO.read("manifest.json"))
  version = manifest["version"]
  files = Array.new
  %w{data/**/*}.each do |glob|
    files = files + Dir.glob(glob)
  end
  files.push("manifest.json")
  zip_name = "readmill-injector-chrome-v#{manifest["version"]}.zip"
  puts "Building #{zip_name}..."
  `zip releases/#{zip_name} -x 'releases/*' -r *`
  puts "Tagging branch with version..."
  `git tag #{version}`
end
