# isospike_diagram

The function `isospike_diagram` is called as:
```julia
isospike_diagram(α_lim::Tuple, Γ_lim::Tuple; n = 4::Int64, N = 396::Int64, x_in = ones(N)::Vector{Float64}, M = 10::Int64)
```

It creates two vectors `α` and `Γ`:
```julia
α_vals = α_lim[1] : (α_lim[2] - α_lim[1]) / (M - 1) : α_lim[2]
Γ_vals = Γ_lim[1] : (Γ_lim[2] - Γ_lim[1]) / (M - 1) : Γ_lim[2]

α = collect(α_vals)
Γ = collect(Γ_vals)
```

and it uses them to sweeep the MG equation and save in a matrix `pks` the amount of peaks for each pair of parameters using the funtion `defineAttractor`. The function returns the two vectors and the matrix.
