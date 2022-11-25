# MLE

The function MLE can be called as:
```julia
MLE(α::Number, Γ_lim::Tuple; n = 4::Int64, N = 396::Int64, x_in = ones(N)::Vector{Float64}, M = 10::Int64)

MLE(α_lim::Tuple, Γ::Number; n = 4::Int64, N = 396::Int64, x_in = ones(N)::Vector{Float64}, M = 10::Int64)

MLE(α_lim::Tuple, Γ_lim::Tuple; n = 4::Int64, N = 396::Int64, x_in = ones(N)::Vector{Float64}, M = 10::Int64)
```

If `Γ` is a `Tuple` and `α` is not then it generates the vector:
```julia
Γ_vals = Γ_lim[1] : (Γ_lim[2] - Γ_lim[1]) / (M - 1) : Γ_lim[2]

Γ = collect(Γ_vals)
```
and sweeps the parameter `Γ` leaving `α` fixed saving the maximum lyapunov exponent in a vector `λ` using the function `lyapunov` from DynamicalSystems.jl. The function returns two vectors `Γ` and `λ`.

If `α` is a `Tuple` and `Γ` is not then it generates the vector:
```julia
α_vals = α_lim[1] : (α_lim[2] - α_lim[1]) / (M - 1) : α_lim[2]

α = collect(α_vals)
```
and sweeps the parameter `α` leaving `Γ` fixed saving the maximum lyapunov exponent in a vector `λ` using the function `lyapunov` from DynamicalSystems.jl. The function returns two vectors `α` and `λ`.

If both `α` and `Γ` are `Tuple` then it creates both vectors, sweeps for both parameters and saves the maximum lyapunov exponent in a matrix `λ` using the function `lyapunov` from DynamicalSystems.jl.  The function returns the two vectors `α` and `Γ` and the matrix `λ`.
