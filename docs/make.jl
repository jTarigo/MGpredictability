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
        "Introduction" => "index.md"
        "Contents" => [
            "Types" => "contents/Types.md"
            "Functions" => "contents/Functions.md"
        ]
        "Functions" => [
            "DynSys" => "Functions/DynSys.md"
            "TimeSeries" => "Functions/TimeSeries.md"
            "defineAttractor" => "Functions/defineAttractor.md"
            "isospike_diagram" => "Functions/isospike_diagram.md"
            "MLE" => "Functions/MLE.md"
        ]
        "Future Implementations" => "Future Implementations.md"
            
    ],
)

deploydocs(repo = "github.com/jTarigo/MGpredictability.git", push_preview = false)
