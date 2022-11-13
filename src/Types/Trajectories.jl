export AbstractTrajectory, Trayectory

abstract type AbstractTrajectory end

struct Trajectory{T, X} <: AbstractTrajectory
    t::T
    x::X
end                                         #struct