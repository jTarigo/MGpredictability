# DynSys

The function DynSys defines the Mackey-Glass dynamical system as a `Dynamical System` from [DynamicalSystems.jl](https://juliadynamics.github.io/DynamicalSystems.jl/latest/).

The function returns a single variable of the type DinamicalSystem and is called as:
```julia
DynSys(S::MG, init_cond::AbstractVector, algorithm::discreteSolver)
```
where `S` is of type `MG` and contains the parameters of the MG system to evolve, `init_cond` must be a `Vector` of length `S.N` and `algorithm` is of a certain [Solver](@ref) Type and indicates which solver to use to evolve the equation (at the time only the discrete method is implemented).

The function uses two other functions `eom!` and `jacobian!` which update the state of the system and the MG jacobian respectively, it also initializes the MG jacobian as a sparse matrix from [SparseArrays](https://docs.julialang.org/en/v1/stdlib/SparseArrays/).
