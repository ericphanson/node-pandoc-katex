
 Brief mathematical introduction to Perron-Frobenius theory

Consider the set of $n\times n$ matrices $M_n$, with complex entries. The algebraic structure (scalar multiplication by complex numbers, addition and multiplication of matrices) plays well with the operator norm,
\[
\|A\| = \sup_{ v\in \mathbb{C}^n: \|v\|_2=1 } \|A v\|_2
\]
and the involution $*$ (i.e. conjugate-transpose), making it a C$^*$-algebra^[I recommend p. 17 of Jane Panangaden's thesis for an excellent diagram explaining the interplay between these structures, along with much more on C$^*$-algebras. Panangaden, J. (2016), [*Energy Full Counting Statistics in Return-to-Equilibrium*](http://digitool.library.mcgill.ca/webclient/StreamGate?folder_id=0&dvs=1506472085000~161). McGill University, Montreal QC.]. A matrix $A\in M_n$ is positive semi-definite if it can be written as $A= B^*B$ for some other matrix $B\in M_n$. 

Let us now go one level higher: we will consider linear maps $\phi$ from $M_n$ to $M_n$, i.e. linear maps whose arguments are themselves matrices. Such a linear map is *positive* if it maps positive elements of $M_n$ to positive elements of $M_n$. Since $\phi$ is a linear map on a vector space (even if that vector space is itself the set of matrices), it has eigenvalues and eigenvectors. The eigenvalues are in general complex numbers, and number
\[
r = \max\{ |\lambda| : \lambda \text{ is an eigenvalue of }\phi \}
\]
  is the *spectral radius* of $\phi$.


With these definitions, we can consider the following Perron-Frobenius type theorem considered by Evans and Høegh-Krohn in 1978^[Evans, D. E. and Høegh-Krohn, R. (1978), [*Spectral Properties of Positive Maps on C$^*$-Algebras*](https://doi.org/10.1112/jlms/s2-17.2.345). Journal of the London Mathematical Society, s2-17: 345–355.]:
