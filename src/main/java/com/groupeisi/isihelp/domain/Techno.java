package com.groupeisi.isihelp.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A Techno.
 */
@Entity
@Table(name = "techno")
public class Techno implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "libelle")
    private String libelle;

    @Column(name = "publish")
    private Boolean publish;

    @ManyToOne
    @JsonIgnoreProperties(value = "technos", allowSetters = true)
    private Question question;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLibelle() {
        return libelle;
    }

    public Techno libelle(String libelle) {
        this.libelle = libelle;
        return this;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public Boolean isPublish() {
        return publish;
    }

    public Techno publish(Boolean publish) {
        this.publish = publish;
        return this;
    }

    public void setPublish(Boolean publish) {
        this.publish = publish;
    }

    public Question getQuestion() {
        return question;
    }

    public Techno question(Question question) {
        this.question = question;
        return this;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Techno)) {
            return false;
        }
        return id != null && id.equals(((Techno) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Techno{" +
            "id=" + getId() +
            ", libelle='" + getLibelle() + "'" +
            ", publish='" + isPublish() + "'" +
            "}";
    }
}
