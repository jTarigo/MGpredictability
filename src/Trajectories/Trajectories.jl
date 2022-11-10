module Trajectories

    export AbstractTrajectory, Trayectory, EOM

    abstract type AbstractTrajectory end

    struct Trayectory <: AbstractTrajectory
        t::AbstractVector
        x::AbstractVector
    end                                         #struct

    function EOM(S::MG, algorithm::Solver)


end                                         #module