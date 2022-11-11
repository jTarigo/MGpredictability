using DynamicalSystems, SparseArrays

include("Systems.jl")
include("Solvers.jl")

export eom!, jacobian, DynSys

function eom!(x_new, x, p, t)

    β = exp(-p.Γ/p.N)

    x_new[1:end-1] = x[2:end]
    x_new[end] = β * x[end] + (1 - β) * p.α * x[1]/(1 + x[1]^p.n)

end

function jacobian!(J, x, p, t)

    β = exp(-p.Γ/p.N)

    J[end, 1] = (1 - β) * p.α * (1 - (p.n - 1) * x[1]^p.n)/(1 + x[1]^p.n)^2

end

function DynSys(S::MG, init_cond::AbstractVector, algorithm = Solver("discrete"))

    J0 = zeros(S.N, S.N)

    for i = 1:S.N
        for j = 1:S.N
            J0[i, j] = Int.(i + 1 == j)
        end
    end
    
    β = exp(-S.Γ/S.N)
    
    J0[end, 1] = (1 - β) * S.α * (1 - (S.n - 1) * init_cond[1]^p.n)/(1 + init_cond[1]^p.n)^2
    J0[end, end] = β

    J0 = sparse(J0)

    DiscreteDynamicalSystem(eom!, init_cond, S, jacobian!, J0)

end