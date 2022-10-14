using Documenter, MGpredictability

DocMeta.setdocmeta!(MGpredictability, :DocTestSetup,
    :(using MGpredictability); recursive=true)

makedocs(
    format = Documenter.HTML(
        prettyurls = haskey(ENV, "GITHUB_ACTIONS"),
        collapselevel = 1,
        assets = ["assets/aligned.css"],
    ),
    sitename = "Mackey-Glass Predictability",
    doctest = false,
    strict = false,
    pages = [
        "Home" => "index.md"
    ],
)

deploydocs(repo = "github.com/jTarigo/MGpredictability.git", push_preview = false)