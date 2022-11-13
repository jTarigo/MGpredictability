module MGpredictability

    include("init.jl")

    include("Types/Systems.jl")
    include("Types/Solvers.jl")
    include("Types/Trajectories.jl")
    include("Types/Atractors.jl")

    include("Functions/DynSys.jl")
    include("Functions/TimeSeries.jl")
    include("Functions/defineAttractor.jl")
    
end # module
