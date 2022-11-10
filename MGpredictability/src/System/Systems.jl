module Systems

    export System, MackeyGlass_System, MG

    abstract type System end

    abstract type MackeyGlass_System <: System end

    struct MG <: MackeyGlass_System
        α::Float64
        Γ::Float64
        n::Int64
        N::Int64
    end                                                 #struct

end                                                     #module