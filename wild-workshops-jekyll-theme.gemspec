# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "wild-workshops-jekyll-theme"
  spec.version       = "0.1.2"
  spec.authors       = ["Jean-François Morin"]
  spec.email         = ["jeanfrancois.morin@wildcodeschool.com"]

  spec.summary       = "Jekyll theme for Wild Code School workshops."
  spec.homepage      = "https://github.com/WildCodeSchool"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
  spec.add_runtime_dependency "jekyll-readme-index", '~> 0.3.0'
end
