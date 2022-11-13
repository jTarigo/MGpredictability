export defineAttractor

function defineAttractor(X::Trajectory)

    locs, pks = findmaxima(X.x)

    if (length(pks) == 0) | (maximum(X.x) - minimum(X.x) < 1e-3)
        num_pks = 0

        T = 0

        word = []
    else
        p_max = maximum(pks)
        Δmax = findall(x -> x < 1e-4, broadcast(abs, pks .- p_max))

        if length(Δmax) > 3
            num_pks = gcd(diff(Δmax))

            T = X.t[locs][end] - X.t[locs][end - num_pks]

            peaks = round.(pks, digits = 1)[1:num_pks]

            word = Vector{Int64}()

            for k in 1:num_pks

                push!(word, findall(x -> x == peaks[k], unique(peaks))[1])

            end
        else
            num_pks = -1

            T = -1

            word = [-1]
        end
    end

    return Attractor(num_pks, T, word)
end