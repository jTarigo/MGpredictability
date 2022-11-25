# Types

The following is a list of the types of variables used inside the library.

## Systems

Composed of the type 
```julia
abstract type MackeyGlass_System <: AbstractSystem end
```
and 
```julia
struct MG <: MackeyGlass_System
    α::Float64
    Γ::Float64
    n::Int64
    N::Int64
end
```

The struct `MG` contains the four parameters needed to set the MG discrete equation.
