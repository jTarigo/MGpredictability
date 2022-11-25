# Functions

Here is a list of the functions which can be used in the library.

##DynSys
```julia
DynSys(S::MG, init_cond::AbstractVector, algorithm::discreteSolver)
```

##TimeSeries
```julia
TimeSeries(DS::DiscreteDynamicalSystem; Δt = 200.0, Transient = 1000.0)
```

##defineAttractor
```julia
defineAttractor(X::Trajectory)
```

##isospike_diagram
```julia
isospike_diagram(α_lim::Tuple, Γ_lim::Tuple; n = 4::Int64, N = 396::Int64, x_in = ones(N)::Vector{Float64}, M = 10::Int64)
```

##MLE
```julia
MLE(α::Number, Γ_lim::Tuple; n = 4::Int64, N = 396::Int64, x_in = ones(N)::Vector{Float64}, M = 10::Int64)

MLE(α_lim::Tuple, Γ::Number; n = 4::Int64, N = 396::Int64, x_in = ones(N)::Vector{Float64}, M = 10::Int64)

MLE(α_lim::Tuple, Γ_lim::Tuple; n = 4::Int64, N = 396::Int64, x_in = ones(N)::Vector{Float64}, M = 10::Int64)
```
