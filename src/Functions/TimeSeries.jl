export TimeSeries

function TimeSeries(DS::DiscreteDynamicalSystem; Δt = 200.0, Transient = 1000.0)

    x = trajectory(DS, Δt * DS.p.N, Ttr = Transient * DS.p.N, save_idxs = DS.p.N)[:, 1]

    t = Vector(Transient:1/DS.p.N:(Transient + Δt))

    return Trajectory(t, x)

end