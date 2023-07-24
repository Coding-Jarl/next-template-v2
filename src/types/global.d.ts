import { NextResponse } from 'next/server'

/**
 * Pour expliquer ce que fait le type :
 * ```ts
 * Awaited<ReturnType<F>> //^? Récupère le type de retour d'une fonction
 * extends NextResponse<> //^? Vérifie si le type de retour est une NextResponse
 * infer T //^? Si c'est une NextResponse, je stocke le type du générique dans T
 * => ? T : never //^? Je n'accepte que le fait que le retour soit une NextResponse et je retourne T
 * ```
 */
type ApiResponse<F extends (...args: any) => any> = Awaited<
  ReturnType<F>
> extends NextResponse<infer T>
  ? T
  : never