export AbstractTrajectory, Trayectory

abstract type AbstractTrajectory end

struct Trajectory <: AbstractTrajectory
    t::AbstractVector
    x::AbstractVector
end                                         #struct