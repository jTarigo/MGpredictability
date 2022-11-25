# defineAttractor

The function `defineAttractor` returns a variable of type `Attractor` and is called as:
```julia
defineAttractor(X::Trajectory)
```

where `X` is a trajectory obtained using the function `TimeSeries`. 

This function uses [Peaks.jl](https://halleysfifthinc.github.io/Peaks.jl/stable/) to find the peaks of the time series contained in only one period if the signal is periodic. It also returns the period and the order of the peaks. If the signal is chaotic the function returns `Attractor(-1, -1, [])` and it returns `Attractor(0, 0, [])` if it is a fixed point.
