export isospike_diagram

function isospike_diagram(α_lim::Tuple, Γ_lim::Tuple; n = 4::Int64, N = 396::Int64, x_in = ones(N)::Vector{Float64}, M = 10::Int64)

    pks =Array{Float64}(undef, M, M)

    α_vals = α_lim[1] : (α_lim[2] - α_lim[1]) / (M - 1) : α_lim[2]
    Γ_vals = Γ_lim[1] : (Γ_lim[2] - Γ_lim[1]) / (M - 1) : Γ_lim[2]

    i = 1

    for α in α_vals

        j = 1

        Threads.@threads for Γ in Γ_vals
        
            pks[i, j] = defineAttractor(TimeSeries(DynSys(MG(α, Γ, n, N), x_in, discreteSolver()))).count

            j += 1

        end

        i += 1

    end

    α = collect(α_vals)
    Γ = collect(Γ_vals)

    return α, Γ, pks

end