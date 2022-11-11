export AbstractSolver, Solver

abstract type AbstractSolver end

struct Solver <: AbstractSolver
    alg::String
end                                    #struct