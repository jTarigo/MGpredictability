export AbstractSystem, MackeyGlass_System, MG

abstract type AbstractSystem end

abstract type MackeyGlass_System <: AbstractSystem end

struct MG <: MackeyGlass_System
    α::Float64
    Γ::Float64
    n::Int64
    N::Int64
end                                                 #struct