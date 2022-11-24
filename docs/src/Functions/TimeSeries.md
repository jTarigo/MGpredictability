# TimeSeries

The function `TimeSeries` returns a variable of type `Trajectory` and is called as:

```julia
TimeSeries(DS::DiscreteDynamicalSystem; Δt = 200.0, Transient = 1000.0)
```
where `DS` is the system to evolve and is obtained using the function [`DynSys`](@ref), `Δt` is the amount of time recorded and `Transient` the amount of time evolved before starting to record.
