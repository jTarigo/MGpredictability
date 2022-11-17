export MLE

function MLE(α::Number, Γ_lim::Tuple; n = 4::Int64, N = 396::Int64, x_in = ones(N)::Vector{Float64}, M = 10::Int64)

    λ = Vector{Float64}()

    Γ_vals = Γ_lim[1] : (Γ_lim[2] - Γ_lim[1]) / (M - 1) : Γ_lim[2]

    Threads.@threads for Γ in Γ_vals
 
        S = DynSys(MG(α, Γ, n, N), x_in, discreteSolver())

        push!(λ, lyapunov(S, S.p.N * 1000))

    end

    Γ = collect(Γ_vals)

    return Γ, λ

end

function MLE(α_lim::Tuple, Γ::Number; n = 4::Int64, N = 396::Int64, x_in = ones(N)::Vector{Float64}, M = 10::Int64)

    λ = Vector{Float64}()

    α_vals = α_lim[1] : (α_lim[2] - α_lim[1]) / (M - 1) : α_lim[2]

    Threads.@threads for α in α_vals
 
        S = DynSys(MG(α, Γ, n, N), x_in, discreteSolver())

        push!(λ, lyapunov(S, S.p.N * 2000))

    end

    α = collect(α_vals)

    return α, λ

end

function MLE(α_lim::Tuple, Γ_lim::Tuple; n = 4::Int64, N = 396::Int64, x_in = ones(N)::Vector{Float64}, M = 10::Int64)

    λ = Array{Float64}(undef, M, M)

    α_vals = α_lim[1] : (α_lim[2] - α_lim[1]) / (M - 1) : α_lim[2]
    Γ_vals = Γ_lim[1] : (Γ_lim[2] - Γ_lim[1]) / (M - 1) : Γ_lim[2]

    i = 1
    for α in α_vals
        j = 1

        Threads.@threads for Γ in Γ_vals

            S = DynSys(MG(α, Γ, n, N), x_in, discreteSolver())

            λ[i, j] = lyapunov(S, S.p.N * 1000)

            j += 1
        end

        i += 1
    end

        α = collect(α_vals)
        Γ = collect(Γ_vals)

    return α, Γ, λ

end