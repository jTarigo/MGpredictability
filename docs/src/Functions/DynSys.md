# DynSys

The function DynSys defines the Mackey-Glass dynamical system as a `Dynamical System` from [DynamicalSystems.jl](https://juliadynamics.github.io/DynamicalSystems.jl/latest/).

The function uses two other functions `eom!` and `jacobian!` which define the Mackey-Glass equation of motion and its jacobian respectively.

## eom!

When using the [`discreteSolver()`](@ref) method the function `eom!` is an in-place inplementation of the discrete Mackey-Glass equation of motion and is defined as:

```julia
function eom!(x_new, x, p, t)

    β = exp(-p.Γ/p.N)

    x_new[1:end-1] = x[2:end]
    x_new[end] = β * x[end] + (1 - β) * p.α * x[1]/(1 + x[1]^p.n)

end
```

## jacobian!

When using the [`discreteSolver()`](@ref) method the function `jacobian!` is an in-place inplementation of the discrete Mackey-Glass jacobian of motion and is defined as:

```julia
function jacobian!(J, x, p, t)

    β = exp(-p.Γ/p.N)

    J[end, 1] = (1 - β) * p.α * (1 - (p.n - 1) * x[1]^p.n)/(1 + x[1]^p.n)^2

end
```

## DynSys

