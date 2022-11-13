export AbstractAttractor, Attractor

abstract type AbstractAttractor end

struct Attractor{VC, VT <: Number, VW} <: AbstractAttractor
    count::VC
    T::VT
    Word::VW
end                                    #struct