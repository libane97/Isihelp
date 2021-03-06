import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ILangage, Langage } from 'app/shared/model/langage.model';
import { LangageService } from './langage.service';
import { IQuestion } from 'app/shared/model/question.model';
import { QuestionService } from 'app/entities/question/question.service';

@Component({
  selector: 'jhi-langage-update',
  templateUrl: './langage-update.component.html',
})
export class LangageUpdateComponent implements OnInit {
  isSaving = false;
  questions: IQuestion[] = [];

  editForm = this.fb.group({
    id: [],
    libelle: [],
    publish: [],
    question: [],
  });

  constructor(
    protected langageService: LangageService,
    protected questionService: QuestionService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ langage }) => {
      this.updateForm(langage);

      this.questionService.query().subscribe((res: HttpResponse<IQuestion[]>) => (this.questions = res.body || []));
    });
  }

  updateForm(langage: ILangage): void {
    this.editForm.patchValue({
      id: langage.id,
      libelle: langage.libelle,
      publish: langage.publish,
      question: langage.question,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const langage = this.createFromForm();
    if (langage.id !== undefined) {
      this.subscribeToSaveResponse(this.langageService.update(langage));
    } else {
      this.subscribeToSaveResponse(this.langageService.create(langage));
    }
  }

  private createFromForm(): ILangage {
    return {
      ...new Langage(),
      id: this.editForm.get(['id'])!.value,
      libelle: this.editForm.get(['libelle'])!.value,
      publish: this.editForm.get(['publish'])!.value,
      question: this.editForm.get(['question'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ILangage>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: IQuestion): any {
    return item.id;
  }
}
