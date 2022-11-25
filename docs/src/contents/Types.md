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

## Solvers

Composed of the type
```julia
struct discreteSolver <: AbstractSolver end
```
it defines the algorithm used to solve the equation.

## Trajectory

Composed of the type
```julia
struct Trajectory{T, X} <: AbstractTrajectory
    t::T
    x::X
end
```
it contains the information of a time series of one variable. `t` represents the time and `x` the MG variable.

## Attractor
Composed of the type
```julia
struct Attractor{VC, VT <: Number, VW} <: AbstractAttractor
    count::VC
    T::VT
    Word::VW
end
```
defines the MG attractor. `count` contains the number of peaks in a period, `T` represents the period of the signal and `Word` contains the order of the peaks.
