# Hap pas Hapi — Native Android build

Ky projekt ndërtohet si Expo/React Native native Android app. Nuk përdor `chatgpt.site` ose WebView.

## GitHub Actions
1. Ngarko gjithë përmbajtjen e këtij folderi në repository.
2. Hape **Actions** → **Build Hap pas Hapi Native APK**.
3. Shtyp **Run workflow**.
4. Pas build-it, te **Artifacts** shkarko `Hap-pas-Hapi-Native-APK`.

Ikona merret nga `assets/icon.png` dhe është fotografia origjinale e dhënë nga përdoruesi.
# Statusi i pagesave dhe Google Play

Ky version përmban vetëm mësime **shembull** për A1–C2. Çmimet e planifikuara
janë 30 € për çdo nivel veçmas dhe 20 € një herë për paketën e të gjitha
provimeve. Identifikuesit e propozuar në Play Console janë `level_a1`,
`level_a2`, `level_b1`, `level_b2`, `level_c1`, `level_c2` dhe `all_exams`.
Çmimet në kod janë vetëm për paraqitje; në një integrim funksional duhet të
shfaqen çmimet e lokalizuara që kthen Google Play Billing.

**Mos e publikoni si produkt me pagesë ende.** Duhet të shtohen mësimet e
plota dhe provimet, Google Play Billing, verifikimi i blerjeve në server,
ruajtja/rikthimi i të drejtave të përdoruesit dhe njohja e blerjeve. Asnjë
buton në këtë version nuk mbledh pagesa dhe shembujt janë falas.

Workflow ngarkon edhe një AAB për inspektim. Ai nuk konfiguron çelësin privat
të nënshkrimit; AAB-ja duhet nënshkruar dhe testuar përpara ngarkimit në Play
Console. Mos vendosni çelësa apo fjalëkalime në repository.
