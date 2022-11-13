using Test, MGpredictability

fixed_point_attractor = defineAttractor(TimeSeries(DynSys(MG(4, 1, 4, 300), ones(300), discreteSolver())))

@test fixed_point_attractor.count == 0
@test fixed_point_attractor.T == 0
@test fixed_point_attractor.Word == []

limit_cycle_attractor = defineAttractor(TimeSeries(DynSys(MG(4, 4, 4, 300), ones(300), discreteSolver())))

@test limit_cycle_attractor.count == 2
@test limit_cycle_attractor.T == 2.3866666666665424
@test limit_cycle_attractor.Word == [1, 2]

chaotic_atractor = defineAttractor(TimeSeries(DynSys(MG(4, 7, 4, 300), ones(300), discreteSolver())))

@test chaotic_atractor.count == -1
@test chaotic_atractor.T == -1
@test chaotic_atractor.Word == [-1]